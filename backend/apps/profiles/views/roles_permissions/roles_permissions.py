from apps.profiles.serializers import RolePermissionsSerializer
from rest_framework.mixins import (
    RetrieveModelMixin,
    UpdateModelMixin,
    DestroyModelMixin,
    ListModelMixin,
)
from rest_framework import viewsets
from django.contrib.auth.models import Group


class RolePermissionsView(
    RetrieveModelMixin,
    UpdateModelMixin,
    DestroyModelMixin,
    ListModelMixin,
    viewsets.GenericViewSet,
):
    serializer_class = RolePermissionsSerializer
    queryset = Group.objects.all()
    lookup_url_kwarg = "group_id"
