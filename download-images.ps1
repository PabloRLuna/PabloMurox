$ProgressPreference = 'SilentlyContinue'

# Crear la carpeta si no existe
if (-not (Test-Path -Path "public/images")) {
    New-Item -ItemType Directory -Path "public/images"
}

# Descargar la imagen de perfil
Invoke-WebRequest -Uri "https://yt3.googleusercontent.com/3z-aCi2fTGf14GCYvyL20uUP3MY2nc8LhY1Bcw8ZL_LB_P6V_NBrNl6rbW22aMWq_f86jJETJg=s900-c-k-c0x00ffffff-no-rj" -OutFile "public/images/profile.jpg"

# Descargar la imagen de fondo
Invoke-WebRequest -Uri "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/b0e5cc656a0bdb30574a736ab00c2f488c35c114-1280x720.jpg?auto=format&fit=fill&q=80&w=1082" -OutFile "public/images/background.jpg"
