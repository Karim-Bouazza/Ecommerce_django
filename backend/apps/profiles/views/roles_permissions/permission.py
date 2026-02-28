from rest_framework.generics import ListAPIView
from ...serializers import PermissionSerializer
from django.contrib.auth.models import Permission


class PermissionView(ListAPIView):
    pagination_class = None
    queryset = Permission.objects.all().order_by("id")
    serializer_class = PermissionSerializer
