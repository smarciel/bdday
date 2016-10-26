from django.shortcuts import render

# Create your views here.

def zorionak_view(request):
    return render(request, 'web/zorionak.html', {})
