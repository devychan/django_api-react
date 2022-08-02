from django.urls import path
from . import views


urlpatterns = [
    path('notes/',views.getNotes, name="notes"),
    path('note/<str:id>',views.getNote, name="note"),
    path('note/create/',views.createNote, name="create-note"),
    path('note/update/<str:id>',views.updateNote, name="update-note"),
    path('note/delete/<str:id>',views.deleteNote, name="delete-note"),
]