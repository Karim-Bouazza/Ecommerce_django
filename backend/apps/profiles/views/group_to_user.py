from django.contrib.auth import get_user_model
from apps.profiles.serializers import GroupToUserSerializer
from rest_framework.mixins import (
    RetrieveModelMixin,
    UpdateModelMixin,
    DestroyModelMixin,
    ListModelMixin,
)
from rest_framework import viewsets

User = get_user_model()


class GroupToUserViewSet(
    RetrieveModelMixin,
    UpdateModelMixin,
    DestroyModelMixin,
    ListModelMixin,
    viewsets.GenericViewSet,
):
    serializer_class = GroupToUserSerializer
    queryset = User.objects.all()
    lookup_url_kwarg = "user_id"
