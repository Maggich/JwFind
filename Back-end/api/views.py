from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
def hello(request):
    if request.method == 'POST':
        body = json.loads(request.body)
        name = body.get("name", "Гость")
        return JsonResponse({"message": f"Привет, {name}!"})
    return JsonResponse({"message": "Привет, просто GET запрос"})
