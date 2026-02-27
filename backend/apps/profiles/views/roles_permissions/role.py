from rest_framework import viewsets
from ...serializers import RoleSerializer
from django.contrib.auth.models import Group
from django.db.models import Count


class RoleViewSet(viewsets.ModelViewSet):
    serializer_class = RoleSerializer
    queryset = Group.objects.annotate(users_count=Count("user", distinct=True))
