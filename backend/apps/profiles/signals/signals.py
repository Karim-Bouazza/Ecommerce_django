from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth import get_user_model
from apps.notifications.models import Notification
from asgiref.sync import async_to_sync
from channels.layers import get_channel_layer

User = get_user_model()


# @receiver(post_save, sender=User)
# def create_new_user_notification(sender, instance, created, **kwargs):
#     if created:
#         Notification.objects.create(message=f"New user created: {instance.username}")


@receiver(post_save, sender=User)
def create_notification(sender, instance, created, **kwargs):
    if created:
        channel_layer = get_channel_layer()

        async_to_sync(channel_layer.group_send) (
            "notifications",
            {
                "type": "send_notification",
                "data": {
                    " message": f"New User registered: {instance.username}"
                }
            }
        )