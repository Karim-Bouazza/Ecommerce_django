from django.urls import include, path, include
from .views import *
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register("roles", RoleViewSet, basename="role")


urlpatterns = [
    path("register/", RegisterView.as_view(), name="register"),
    path("login/", LoginView.as_view(), name="login"),
    path("", include(router.urls)),
]
