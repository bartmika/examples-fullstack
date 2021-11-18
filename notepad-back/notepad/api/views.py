import json
# import jwt
from django.http import JsonResponse
from django.core.paginator import Paginator
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login

# from onlinestore.settings import SECRET_KEY
from .models import Note


"""
Endpoint will return the version of the site
"""
def version_endpoint(request):
    return JsonResponse({
        "version": 2.0,
    })

"""
Endpoint will accept a user name post and return a hello message.
"""
def hello_endpoint(request):
    if request.method == "POST":
        data = json.loads(request.body)

        name = data.get("name")

        return JsonResponse({
            "msg": "Konichiwa " + name + "!",
        })
    else:
        return JsonResponse({
            "msg": "method not allowed",
        }, status=405)


"""
Endpoint for saving a create note request
"""
def note_list_or_create_endpoint(request):
    if request.method == "GET":
        notes = Note.objects.all()

        noteArr = []
        for note in notes:
            noteArr.append({
                "id": note.id,
                "title": note.title,
                "category": note.category,
                "text": note.text,
            })

        return JsonResponse({
            "results": noteArr,
        })
    elif request.method == "POST":
        data = json.loads(request.body)

        title = data.get("title")
        category = data.get("category")
        text = data.get("text")

        note = Note.objects.create(title=title, category=category, text=text)

        return JsonResponse({
            "id": note.id,
            "title": note.title,
            "category": note.category,
            "text": note.text,
        }, status=201)
    else:
        return JsonResponse({
            "msg": "method not allowed",
        }, status=405)

"""
Endopoint for getting, updating or deleting a specific note.
"""
def note_retrieve_update_or_delete_endpoint(request, id):
    try:
        note = Note.objects.get(id=id)
    except Note.DoesNotExist:
        return JsonResponse({
            "msg": "d.n.e."
        }, status=404)

    if request.method == "GET":
        return JsonResponse({
            "id": note.id,
            "title": note.title,
            "category": note.category,
            "text": note.text,
        })

    elif request.method == "PUT":
        # Step 1 - get data that was sent by the user
        data = json.loads(request.body)
        title = data["title"]
        category = data["category"]
        text = data["text"]

        # Step 2 - Update our model fields.
        note.title = title
        note.category = category
        note.text = text

        # Step 3 - Save to our database.
        note.save()

        # step 4 - Return a success message back to the user.
        return JsonResponse({
           "id": id,
           "title": note.title,
           "category": note.category,
           "text": note.text,
        })

    elif request.method == "DELETE":
        note.delete()

        return JsonResponse({}, status=204)
    else:
        return JsonResponse({
            "msg": "method not allowed",
        }, status=405)
