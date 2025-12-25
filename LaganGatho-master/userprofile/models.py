from django.db import models
from users.models import CustomUser
import uuid
from datetime import date

# Create your models here.


class UserProfile(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE,related_name='userr')
    profile_id  = models.UUIDField(default=uuid.uuid4)
    profile_pic = models.ImageField(default="default.jpg",upload_to="profile_pic")
    
    slug = models.SlugField(max_length=50)
    
    marital_status_choices = [
        ('Never Married', 'Never Married'),
        ('Divorced', 'Divorced'),
        ('Awating Divorce', 'Awaiting Divorce'),
    ]
    marital_status = models.CharField(
        max_length=20, choices=marital_status_choices)
    DOB = models.DateField()
    religion_choices = [
        ('hindu', 'Hindu'),
        ('muslim', 'Muslim'),
        ('christian', 'Christian'),
        ('buddhist', 'Buddhist'),
        ('sikh', 'Sikh'),
        ('jain', 'Jain'),
        ('jewish', 'Jewish'),
        ('other', 'Other'),
        ('no Religion', 'No Religion'),
    ]

    religion = models.CharField(max_length=15, choices=religion_choices)
    # gotra
    location_choices = [
        ('achham', 'Achham'),
         ('arghakhanchi', 'Arghakhanchi'),
           ('baglung', 'Baglung'),   ('baitadi', 'Baitadi'),
            ('bajhang', 'Bajhang'), ('bajura', 'Bajura'),('banke', 'Banke'), ('bara', 'Bara'),
                ('bardiya', 'Bardiya'), ('bhaktapur', 'Bhaktapur'), ('bhojpur', 'Bhojpur'),
                 ('chitwan', 'Chitwan'),   ('dadeldhura', 'Dadeldhura'), ('dailekh', 'Dailekh'),
                   ('dang', 'Dang'), ('darchula', 'Darchula'),    ('dhading', 'Dhading'),
                     ('dhankuta', 'Dhankuta'),
                     ('dhanusa', 'Dhanusa'), ('dolakha', 'Dolakha'),
                      ('dolpa', 'Dolpa'), ('doti', 'Doti'),
                       ('gorkha', 'Gorkha'), ('gulmi', 'Gulmi'), 
                       ('humla', 'Humla'), ('ilam', 'Ilam'), 
                       ('jajarkot', 'Jajarkot'), ('jhapa', 'Jhapa'),
                        ('jumla', 'Jumla'), ('kailali', 'Kailali'),
                         ('kalikot', 'Kalikot'), ('kanchanpur', 'Kanchanpur'),
                          ('kapilvastu', 'Kapilvastu'), ('kaski', 'Kaski'), 
                          ('kathmandu', 'Kathmandu'), ('kavrepalanchok', 'Kavrepalanchok'),
                           ('khotang', 'Khotang'), ('lalitpur', 'Lalitpur'), ('lamjung', 'Lamjung'),
                            ('mahottari', 'Mahottari'), ('makawanpur', 'Makawanpur'), ('manang', 'Manang'), 
                            ('morang', 'Morang'), ('mugu', 'Mugu'), ('mustang', 'Mustang'), ('myagdi', 'Myagdi'),
                             ('nawalpur', 'Nawalpur'), ('nuwakot', 'Nuwakot'), ('okhaldhunga', 'Okhaldhunga'),
                              ('palpa', 'Palpa'), ('panchthar', 'Panchthar'), ('parasi', 'Parasi'), ('parbat', 'Parbat'),
                               ('parsa', 'Parsa'), ('pyuthan', 'Pyuthan'), ('ramechhap', 'Ramechhap'), ('rasuwa', 'Rasuwa'),
                                ('rautahat', 'Rautahat'), ('rolpa', 'Rolpa'), ('rukum', 'Rukum'),
                                 ('rukum paschim', 'Rukum Paschim'), ('rupandehi', 'Rupandehi'), ('salyan', 'Salyan'),
                                  ('sankhuwasabha', 'Sankhuwasabha'), ('saptari', 'Saptari'), ('sarlahi', 'Sarlahi'), 
                                  ('sindhuli', 'Sindhuli'), ('sindhupalchok', 'Sindhupalchok'), ('siraha', 'Siraha'),
                                   ('solukhumbu', 'Solukhumbu'), ('sunsari', 'Sunsari'), ('surkhet', 'Surkhet'), 
                                   ('syangja', 'Syangja'), ('tanahu', 'Tanahu'), ('taplejung', 'Taplejung'),
                                    ('terhathum', 'Terhathum'), ('udayapur', 'Udayapur')]

    
    location = models.CharField(max_length=20, choices=location_choices)
    family_type_choices = [
        ('Joint', 'Joint'),
        ('Nuclear', 'Nuclear'),
    ]
    family_type = models.CharField(max_length=10, choices=family_type_choices)
    Rashi_choices = [
        ('mesh', 'Mesh'),
        ('bris', 'Bris'),
        ('mithun', 'Mithun'),
        ('karkat', 'Karkat'),
        ('singha', 'Singha'),
        ('kanya', 'Kanya'),
        ('tula', 'Tula'),
        ('brischik', 'Brischik'),
        ('dhanu', 'Dhanu'),
        ('makar', 'Makar'),
        ('kumba', 'Kumba'),
        ('min', 'Min'),
    ]
    Rashi = models.CharField(max_length=10, choices=Rashi_choices)
    education_choices = [
        ('slc','Slc'),
        ('high School','High School'),
        ('bachelors','Bachelors'),
        ('master','Master'),
    ]
    education = models.CharField(max_length=20, choices=education_choices)
    bio = models.TextField(max_length=500)



    def __str__(self):
        return self.user.username
    
    def get_age(self):
        today = date.today()
        return today.year - self.DOB.year - ((today.month, today.day) < (self.DOB.month, self.DOB.day))

    # def __init__(self, *args, **kwargs):
    #     super().__init__(*args,**kwargs)


    
        


