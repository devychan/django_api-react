from django.http import JsonResponse
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from . serializers import NoteSerializers


from . models import Note


@api_view(['GET'])
def getNotes(request):
    notes = Note.objects.all().order_by('-updated', '-created')
    json = NoteSerializers(notes, many=True)
    return Response(json.data)

@api_view(['GET'])
def getNote(request, id):
    note = Note.objects.get(id=id)
    json = NoteSerializers(note, many=False)
    return Response(json.data)

@api_view(['PUT'])
def updateNote(request, id):
    data = request.data
    note = Note.objects.get(id=id)
    json = NoteSerializers(instance=note, data=data)

    if json.is_valid():
        json.save()
    return Response(json.data)

@api_view(['POST'])
def createNote(request):
    data = request.data
    note = Note.objects.create(
        body=data['body']
    )
    json = NoteSerializers(note, many=False)
    return Response(json.data)

@api_view(['DELETE'])
def deleteNote(request, id):
    note = Note.objects.filter(id=id).delete()
    return Response("Deleted")