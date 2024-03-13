# Recuperatorio Digitalhouse Gublits 01
> Este proyecto es para validar los conocimientos adquiridos en el curso, aqui se encuentra los pasos para arrancar el proyecto y podes trabajar en el.

## Instalación
Para instalar este proyecto deben realizar los siguientes pasos:

### 1. Clonar el repositorio
En una terminal deben ejecutar el siguiente comando:
``` shell
git clone https://github.com/andreybejaranodh/recuperatorio-glu01.git
```

### 2. Configurar archivo .env
El repositorio usa un archivo llamando `.env` el cual van a tener que crear, para esto pueden copiar el archivo `.env.example` y crean el archivo `.env`, despues ahi les aparece la configuracion de la base de datos la cual van a tener que configurar segun la configuracion de su MySQL que debe tener instalado en sus computadoras, si para conectarse a la base de datos no les pide contraseña el campo `DB_PASSWORD` lo van a dejar en blanco.

### 3. Instalar dependencias
Deben correr el siguiente comando para instalar las dependencias del proyecto:
``` shell
npm install
```

### 4. Creacion de base de datos y estructura
Para este paso el proyecto usa `migraciones` por tal razon no van a tener que ejecutar codigo SQL, ya que las migraciones lo hacen, deben seguir los siguientes pasos:

1. Primero con `MySQL workbench` van a crear una base de datos llamada `glu01`.
2. En una terminal deben correr el siguiente comando para correr migraciones las cuales crearan la tablas y la estructura de la base de datos:
``` shell 
npm run migrate
```
3. Despues poblar la base de datos con los datos base
``` shell 
npm run seed:all
```

## Correr el proyecto
Para correr el proyecto deben correr en una terminal lo siguiente:
``` shell
npm run dev
```
Esto va a iniciar el proyecto en el la siguiente url la cual pueden acceder desde el navegador: http://localhost:3000

## Flujo de trabajo
Para trabajar van a hacer lo siguiente: 
1. Van a crear un branch nuevo apartir del branch `main` este branch se puede llamar con su nombre EJ: `andrey`.
2. Repartirse las tareas, cada uno va a trabajar en tareas diferentes
3. Al branch `main` no van a poder hacer push, solo a traves de pull request(no se procupen si o entienden ahora, cuando llegue el momento lo vemos).
