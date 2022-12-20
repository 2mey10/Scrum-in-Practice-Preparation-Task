import base64
import io
from django.forms.models import model_to_dict
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
import json
from PIL import Image

from registration.models import ImageModel


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer




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

@api_view(["GET"])
def getImagesEndPointNew(request):
    if request.method == "GET":
        # folder path
        relative_frontend_path = "static/images/"

        manager = ImageModel.objects
        all_entries = list(manager.values_list())
        all_names = [el[1] for el in all_entries]
        all_images = [el[2] for el in all_entries]
        all_descriptions = [el[3] for el in all_entries]
        # Iterate directory

        print(all_images)
        res_path = [relative_frontend_path + el for el in all_images]

        return Response({"response": {
            "image_paths":res_path
        }}, status=status.HTTP_200_OK)
    return Response({}, status.HTTP_400_BAD_REQUEST)
@api_view(['POST'])
def deleteAllDataEndPoint(request):
    manager = ImageModel.objects
    manager.all().delete()
    return Response(200)

@api_view(['GET'])
def get_all_data_endpoint(request):
    manager = ImageModel.objects
    all_entries = manager.values_list()
    return Response({
        "response":{
            "data": all_entries
        }
    })

@api_view(["POST"])
def upload_image_endpoint(request):
    if request.method == "POST":
        data = json.loads(request.body)["data"]
        image_name = data["title"]
        assert image_name != ""
        image_base64 = data["image_base64"]
        image_description = data["description"]

        image_folder = r"C:\Users\thbot\Desktop\UNIVERSITY\Master\Scrum in Practice\frontend\public\static\images"
        img = Image.open(io.BytesIO(base64.decodebytes(bytes(image_base64,"utf-8"))))
        img.save(f"{os.path.join(image_folder,image_name)}.jpg")

        #create object
        img_obj = ImageModel(title=image_name,
                             image=f"{image_name}.jpg",
                             description=image_description,
                             user="NO_USER")
        img_obj.save()

        return Response({
        }, status=status.HTTP_200_OK)

    return Response({}, status.HTTP_400_BAD_REQUEST)