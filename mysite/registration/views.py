from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.http import HttpResponse
from django.template import loader

from registration.serializer import MyTokenObtainPairSerializer, RegisterSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework import status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
import os


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token/',
        '/api/register/',
        '/api/token/refresh/',
        "asdsa"
    ]
    return Response(routes)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def testEndPoint(request):
    if request.method == 'GET':
        data = f"Congratulation {request.user}, your API just responded to GET request"
        return Response({'response': data}, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        text = request.POST.get('text')
        data = f'Congratulation your API just responded to POST request with text: {text}'
        return Response({'response': data}, status=status.HTTP_200_OK)
    return Response({}, status.HTTP_400_BAD_REQUEST)

@api_view(["GET"])
def getImagesEndPoint(request):
    if request.method == "GET":
        # folder path
        dir_path = r'C:\Users\thbot\Desktop\UNIVERSITY\Master\Scrum in Practice\frontend\public\static\images'
        relative_frontend_path = "static/images/"
        # list to store files
        res = []

        # Iterate directory
        for path in os.listdir(dir_path):
            # check if current path is a file
            if os.path.isfile(os.path.join(dir_path, path)):
                res.append(path)
        print(res)
        res_path = [relative_frontend_path + el for el in res]

        return Response({"response": {
            "images_debug":["static/images/contemplative-reptile.jpg",
                      "static/images/animals-lizard-redheadedrockagama.jpg",
                      "static/images/contemplative-reptile.jpg",
                      "static/images/contemplative-reptile.jpg"],
            "image_paths":res_path
        }}, status=status.HTTP_200_OK)
    return Response({}, status.HTTP_400_BAD_REQUEST)