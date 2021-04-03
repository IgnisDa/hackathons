from django.db import models
from django.utils.translation import gettext_lazy as _

from . import managers


class Interest(models.Model):
    name = models.CharField(
        max_length=80, help_text=_("Short description of interest name")
    )
    description = models.TextField(max_length=200)

    def __str__(self):
        return f"{self.name}"


class Channel(models.Model):
    name = models.CharField(
        max_length=80, help_text=_("The channel Character sequence or name")
    )
    interests = models.ManyToManyField(
        Interest,
        blank=True,
        related_name="channels",
        help_text=_("Interests associated with this channel"),
    )
    number_of_users = models.IntegerField(default=0)

    def __str__(self):
        return f"{self.name}"


class Message(models.Model):
    author = models.CharField(max_length=200, help_text=_("The author of this message"))
    content = models.TextField(help_text=_("The contents of the message"))
    timestamp = models.DateTimeField(
        auto_now_add=True, help_text=_("The time at which the message was sent at")
    )
    channel = models.ForeignKey(
        Channel, null=True, related_name="messages", on_delete=models.CASCADE
    )

    objects = managers.MessageManager()

    def __str__(self):
        return f"Sent by {self.author} at {self.timestamp}"
