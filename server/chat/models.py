from django.db import models
from django.utils.translation import gettext_lazy as _

from . import managers


class Message(models.Model):
    author = models.CharField(max_length=200, help_text=_("The author of this message"))
    content = models.TextField(help_text=_("The contents of the message"))
    timestamp = models.DateTimeField(
        auto_now_add=True, help_text=_("The time at which the message was sent at")
    )

    objects = managers.MessageManager()

    def __str__(self):
        return f"Sent by {self.author} at {self.timestamp}"
