from django.urls import include, path, include
from .views import *
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register("roles", RoleViewSet, basename="role")
router.register("group-to-user", GroupToUserViewSet, basename="group-to-user")
router.register("roles-permissions", RolePermissionsView, basename="roles-permissions")


urlpatterns = [
    path("register/", RegisterView.as_view(), name="register"),
    path("login/", LoginView.as_view(), name="login"),
    path("permissions/", PermissionView.as_view(), name="permissions"),
    path("users/", UserView.as_view(), name="users"),
    path("", include(router.urls)),
]
