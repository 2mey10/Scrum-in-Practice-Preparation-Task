from django.urls import path, re_path
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)
from . import views

urlpatterns = [
    path("allImagesOld/",views.getImagesEndPoint,name="getimages"),
    path("test/",views.testEndPoint,name="test"),
    path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', views.RegisterView.as_view(), name='auth_register'),
    path("upload/", views.upload_image_endpoint),
    path("all/",views.get_all_data_endpoint),
    path("allImagesNew/",views.getImagesEndPointNew,name="getImagesNew"),
    path("deleteAll/",views.deleteAllDataEndPoint,name="deleteAllData"),
    path("getOneImage/",views.get_single_endpoint,name="get_one_image_test")
]