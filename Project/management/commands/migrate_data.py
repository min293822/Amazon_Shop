from django.core.management.base import BaseCommand
from Project.models import Watches, Clothes, Pants, Sneakers, AllProducts

class Command(BaseCommand):
    help = 'Transfers data from Watches, Clothes, Pants, and Sneakers to AllProducts'

    def handle(self, *args, **kwargs):
        watches_data = Watches.objects.all()
        for watch in watches_data:
            if not AllProducts.objects.filter(name=watch.name, color=watch.color).exists():
                AllProducts.objects.create(
                    name=watch.name,
                    color=watch.color,
                    price=watch.price,
                    stock=watch.stock,
                    advertise=watch.advertise,
                    image_url=watch.image_url
                )
        

        clothes_data = Clothes.objects.all()
        for cloth in clothes_data:
            if not AllProducts.objects.filter(name=cloth.name, color=cloth.color, size=cloth.size).exists():
                AllProducts.objects.create(
                    name=cloth.name,
                    color=cloth.color,
                    size=cloth.size,
                    price=cloth.price,
                    stock=cloth.stock,
                    advertise=cloth.advertise,
                    image_url=cloth.image_url
                )
        

        pants_data = Pants.objects.all()
        for pant in pants_data:
            if not AllProducts.objects.filter(name=pant.name, color=pant.color, size=pant.size).exists():
                AllProducts.objects.create(
                    name=pant.name,
                    color=pant.color,
                    size=pant.size,
                    price=pant.price,
                    stock=pant.stock,
                    advertise=pant.advertise,
                    image_url=pant.image_url
                )
        

        sneakers_data = Sneakers.objects.all()
        for sneaker in sneakers_data:
            if not AllProducts.objects.filter(name=sneaker.name, color=sneaker.color, size=sneaker.size).exists():
                AllProducts.objects.create(
                    name=sneaker.name,
                    color=sneaker.color,
                    size=sneaker.size,
                    price=sneaker.price,
                    stock=sneaker.stock,
                    advertise=sneaker.advertise,
                    image_url=sneaker.image_url
                )
        
        self.stdout.write(self.style.SUCCESS('Data transfer complete.'))