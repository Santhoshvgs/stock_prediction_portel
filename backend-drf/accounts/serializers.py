from django.contrib.auth.models import User
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True,min_length=8,style={'input_type':'password'})
    class Meta:
        model = User
        fields = [ 'username', 'email']
    def create(self, validated_data):
        # **unpacks the validated_data dictionary and passes it as keyword arguments to create_user.
        #User.objects.create_user is save the password in a hashed format.
        # User.objects.create is save the password in plain text.
        # user = User.objects.create_user(**validated_data)
        user = User.objects.create_user(
            validated_data['username'], 
            validated_data['email'],
            validated_data['password']
        )
        return user
