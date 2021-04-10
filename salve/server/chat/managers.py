from django.db import models


class MessageManager(models.Manager):
    def get_last_30_messages(self):
        return super().get_queryset().order_by("-timestamp")[:30]
