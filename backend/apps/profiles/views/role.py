from rest_framework import viewsets
from ..serializers import RoleSerializer
from django.contrib.auth.models import Group


class RoleViewSet(viewsets.ModelViewSet):
    serializer_class = RoleSerializer
    queryset = Group.objects.all()
