from django.urls import path

from . import views

urlpatterns = [
    path('api/version', views.version_endpoint, name='version_endpoint'),
    path('api/hello', views.hello_endpoint, name='hello_endpoint'),
    path('api/notes', views.note_list_or_create_endpoint, name="note_list_or_create_endpoint"),
    path('api/note/<id>', views.note_retrieve_update_or_delete_endpoint, name="note_retrieve_update_or_delete_endpoint",),
    path('api/register', views.register_endpoint, name="register_endpoint"),
    path('api/login', views.login_endpoint, name="login_endpoint"),
    path('api/profile', views.profile_endpoint, name="profile_endpoint"),
]
