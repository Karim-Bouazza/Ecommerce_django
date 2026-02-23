from django.contrib.auth import get_user_model
from rest_framework.generics import ListAPIView
from ..serializers import UserSerializer
from rest_framework.permissions import IsAuthenticated

User = get_user_model()

class UserView(ListAPIView):
    permission_classes = [IsAuthenticated]
    queryset = User.objects.all()
    serializer_class = UserSerializer