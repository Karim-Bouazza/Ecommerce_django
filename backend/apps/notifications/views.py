from rest_framework.generics import ListAPIView
from .serializer import NotificationSerializer
from .models import Notification
from rest_framework.permissions import IsAuthenticated


class NotificationListView(ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = NotificationSerializer
    queryset = Notification.objects.order_by("-create_at").all()
