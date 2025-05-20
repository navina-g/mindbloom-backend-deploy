from django.contrib.auth.models import User
from rest_framework import serializers
from .models import MoodEntry
from .models import Appointment

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['email', 'password']

    def create(self, validated_data):
        email = validated_data['email']
        password = validated_data['password']
        user = User.objects.create_user(username=email, email=email, password=password)
        return user
# class MoodSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = MoodEntry
#         fields = ['id', 'user', 'mood', 'note', 'timestamp']
#         read_only_fields = ['user', 'timestamp']
class MoodEntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = MoodEntry
        fields = ['id', 'mood', 'created_at']

class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = ['id', 'user', 'therapist_name', 'date', 'time']
        read_only_fields = ['user']