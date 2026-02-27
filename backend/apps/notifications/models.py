from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()


class Notification(models.Model):
    message = models.TextField()
    create_at = models.DateTimeField(auto_now_add=True)
    is_read = models.BooleanField(default=False)

    def __str__(self):
        return self.message
