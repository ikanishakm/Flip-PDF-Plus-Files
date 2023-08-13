var textForPages =["Contents\u000d\u000a1 Introduction 5\u000d\u000a1.1 Who is this book for? . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5\u000d\u000a1.2 What does this book cover? . . . . . . . . . . . . . . . . . . . . . . . . . . 5\u000d\u000a1.3 What do you need to start? . . . . . . . . . . . . . . . . . . . . . . . . . . 8\u000d\u000a2 Getting started 9\u000d\u000a2.1 What is a fragment shader? . . . . . . . . . . . . . . . . . . . . . . . . . . 9\u000d\u000a2.2 Why are shaders fast? . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 10\u000d\u000a2.3 What is GLSL? . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 13\u000d\u000a2.4 Why are Shaders famously painful? . . . . . . . . . . . . . . . . . . . . . . 13\u000d\u000a2.5 Hello World . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 14\u000d\u000a2.6 Uniforms . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 17\u000d\u000a2.7 gl_FragCoord . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 19\u000d\u000a2.8 Running your shader . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 21\u000d\u000a2.8.1 In Three.js . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 21\u000d\u000a2.8.2 In Processing . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 23\u000d\u000a2.8.3 In openFrameworks . . . . . . . . . . . . . . . . . . . . . . . . . 24\u000d\u000a3 Algorithmic drawing 27\u000d\u000a3.1 Shaping functions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 27\u000d\u000a3.1.1 Step and Smoothstep . . . . . . . . . . . . . . . . . . . . . . . . . 30\u000d\u000a3.1.2 Sine and Cosine . . . . . . . . . . . . . . . . . . . . . . . . . . . . 34\u000d\u000a3.1.3 Some extra useful functions . . . . . . . . . . . . . . . . . . . . . . 37\u000d\u000a3.1.4 Advance shaping functions . . . . . . . . . . . . . . . . . . . . . . 37\u000d\u000a3.2 Colors . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 38\u000d\u000a3.2.1 Mixing color . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 43\u000d\u000a3.2.2 Playing with gradients . . . . . . . . . . . . . . . . . . . . . . . . . 46\u000d\u000a3.2.3 HSB . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 48\u000d\u000a3.2.4 HSB in polar coordinates . . . . . . . . . . . . . . . . . . . . . . . 51\u000d\u000a3.3 Shapes . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 55\u000d\u000a3.3.1 Rectangle . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 55\u000d\u000a3.3.2 Circles . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 63\u000d\u000a3.3.3 Distance field . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 68\u000d\u000a3.3.4 Useful properties of a Distance Field . . . . . . . . . . . . . . . . . 70\u000d\u000a3.3.5 Polar shapes . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 74\u000d\u000a3.3.6 Combining powers . . . . . . . . . . . . . . . . . . . . . . . . . . . 77\u000d\u000a1","Contents\u000d\u000a3.4 2D Matrices . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 79\u000d\u000a3.4.1 Translate . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 79\u000d\u000a3.4.2 Rotations . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 82\u000d\u000a3.4.3 Scale . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 86\u000d\u000a3.4.4 Other uses for matrices: YUV color . . . . . . . . . . . . . . . . . 89\u000d\u000a3.5 Patterns . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 91\u000d\u000a3.5.1 Apply matrices inside patterns . . . . . . . . . . . . . . . . . . . . 94\u000d\u000a3.5.2 Offset patterns . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 97\u000d\u000a3.6 Truchet Tiles . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 100\u000d\u000a3.7 Making your own rules . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 102\u000d\u000a4 Generative designs 105\u000d\u000a4.1 Random . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 105\u000d\u000a4.2 Controlling chaos . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 106\u000d\u000a4.3 2D Random . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 106\u000d\u000a4.4 Using the chaos . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 107\u000d\u000a4.5 Master Random . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 113\u000d\u000a4.6 Noise . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 113\u000d\u000a4.7 2D Noise . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 115\u000d\u000a4.8 Using 2D Noise . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 117\u000d\u000a4.9 Fractal Brownian Motion . . . . . . . . . . . . . . . . . . . . . . . . . . . 121\u000d\u000a4.10 Fractal Brownian Motion . . . . . . . . . . . . . . . . . . . . . . . . . . . 122\u000d\u000a4.11 Using Fractal Brownian Motion . . . . . . . . . . . . . . . . . . . . . . . . 125\u000d\u000a4.12 Fractals . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 127\u000d\u000a5 Image processing 129\u000d\u000a5.1 Textures . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 129\u000d\u000a5.2 Texture resolution . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 133\u000d\u000a5.3 Digital upholstery . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 136\u000d\u000a5.4 Image operations . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 142\u000d\u000a5.4.1 Invert . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 142\u000d\u000a5.4.2 Add, Substract, Multiply and others . . . . . . . . . . . . . . . . . 142\u000d\u000a5.4.3 PS Blending modes . . . . . . . . . . . . . . . . . . . . . . . . . . . 144\u000d\u000a5.5 Kernel convolutions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 150\u000d\u000a5.6 Filters . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 150\u000d\u000a6 Appendix: Other ways to use this book 151\u000d\u000a6.1 How can I navigate this book off-line? . . . . . . . . . . . . . . . . . . . . 151\u000d\u000a6.2 How to run the examples on a RaspberryPi? . . . . . . . . . . . . . . . . 152\u000d\u000a6.3 How to print this book? . . . . . . . . . . . . . . . . . . . . . . . . . . . . 152\u000d\u000a7 List of Examples 155\u000d\u000a7.0.1 Chapters examples . . . . . . . . . . . . . . . . . . . . . . . . . . . 155\u000d\u000a7.0.2 Advance . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 156\u000d\u000a2","Contents\u000d\u000a8 Glossary 159\u000d\u000a8.1 By theme . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 159\u000d\u000a8.2 Alphabetical . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 160\u000d\u000a3","","1 Introduction\u000d\u000aThe images above were made in different ways. The first one was made by Van Gogh\u2019s\u000d\u000ahand applying layer over layer of paint. It took him hours. The second was produced\u000d\u000ain seconds by the combination of four matrices of pixels: one for cyan, one for magenta,\u000d\u000aone for yellow and one for black. The key difference is that the second image is produced\u000d\u000ain a non-serial way (that means not step-by-step, but all at the same time).\u000d\u000aThis book is about the revolutionary computational technique, fragment shaders, that is\u000d\u000ataking digitally generated images to the next level. You can think of it as the equivalent\u000d\u000aof Gutenberg\u2019s press for graphics.\u000d\u000aFragment shaders give you total control over the pixels rendered on the screen at a super\u000d\u000afast speed. This is why they\u2019re used in all sort of cases, from video filters on cellphones\u000d\u000ato incredible 3D video games.\u000d\u000aIn the following chapters you will discover how incredibly fast and powerful this technique\u000d\u000ais and how to apply it to your professional and personal work.\u000d\u000a1.1 Who is this book for?\u000d\u000aThis book is written for creative coders, game developers and engineers who have coding\u000d\u000aexperience, a basic knowledge of linear algebra and trigonometry, and who want to take\u000d\u000atheir work to an exciting new level of graphical quality. (If you want to learn how to\u000d\u000acode, I highly recommend you start with Processing and come back later when you are\u000d\u000acomfortable with it.)\u000d\u000aThis book will teach you how to use and integrate shaders into your projects, improving\u000d\u000atheir performance and graphical quality. Because GLSL (OpenGL Shading Language)\u000d\u000ashaders compile and run on a variety of platforms, you will be able to apply what you\u000d\u000alearn here to any enviroment that uses OpenGL, OpenGL ES or WebGL. In other words,\u000d\u000ayou will be able to apply and use your knowledge with Processing sketches, openFrameworks applications, Cinder interactive installations, Three.js websites or iOS/Android\u000d\u000agames.\u000d\u000a1.2 What does this book cover?\u000d\u000aThis book will focus on the use of GLSL pixel shaders. First we\u2019ll define what shaders\u000d\u000aare; then we\u2019ll learn how to make procedural shapes, patterns, textures and animations\u000d\u000a5","1 Introduction\u000d\u000aFigure 1.1: Gutenberg\u2019s press\u000d\u000a6","1.2 What does this book cover?\u000d\u000aFigure 1.2: Journey by That Game Company\u000d\u000a7","1 Introduction\u000d\u000awith them. You\u2019ll learn the foundations of shading language and apply it to more useful\u000d\u000ascenarios such as: image processing (image operations, matrix convolutions, blurs, color\u000d\u000afilters, lookup tables and other effects) and simulations (Conway\u2019s game of life, GrayScott\u2019s reaction-diffusion, water ripples, watercolor effects, Voronoi cells, etc.). Towards\u000d\u000athe end of the book we\u2019ll see a set of advanced techniques based on Ray Marching.\u000d\u000aThere are interactive examples for you to play with in every chapter. When you change\u000d\u000athe code, you will see the changes immediately. The concepts can be abstract and\u000d\u000aconfusing, so the interactive examples are essential to helping you learn the material.\u000d\u000aThe faster you put the concepts into motion the easier the learning process will be.\u000d\u000aWhat this book doesn\u2019t cover:\u000d\u000a\u2022 This is not an openGL or webGL book. OpenGL/webGL is a bigger subject than\u000d\u000aGLSL or fragment shaders. To learn more about openGL/webGL I recommend\u000d\u000ataking a look at: OpenGL Introduction, the 8th edition of the OpenGL Programming Guide (also known as the red book) or WebGL: Up and Running\u000d\u000a\u2022 This is not a math book. Although we will cover a number of algorithms and\u000d\u000atechniques that rely on an understanding of algebra and trigonometry, we will not\u000d\u000aexplain them in detail. For questions regarding the math I recommend keeping\u000d\u000aone of the following books nearby: 3rd Edition of Mathematics for 3D Game\u000d\u000aProgramming and computer Graphics or 2nd Edition of Essential Mathematics for\u000d\u000aGames and Interactive Applications.\u000d\u000a1.3 What do you need to start?\u000d\u000aNot much! If you have a modern browser that can do WebGL (like Chrome, Firefox or\u000d\u000aSafari) and a internet connection, click the \u201cNext\u201d Chapter button at the end of this\u000d\u000apage to get started.\u000d\u000aAlternatively, based on what you have or what you need from this book you can:\u000d\u000a\u2022 Make an off-line version of this book\u000d\u000a\u2022 Run the examples on a RaspberryPi without a browser\u000d\u000a\u2022 Make a PDF of the book to print\u000d\u000a\u2022 Use the on-line repository to help resolve issues and share code.\u000d\u000a8","2 Getting started\u000d\u000a2.1 What is a fragment shader?\u000d\u000aIn the previous chapter we described shaders as the equivalent of the Gutenberg press\u000d\u000afor graphics. Why? And more importantly: what\u2019s a shader?\u000d\u000aFigure 2.1: From Leter-by-Leter, Right: William Blades (1891). To Page-by-page, Left:\u000d\u000aRolt-Wheeler (1920).\u000d\u000aIf you already have experience making drawings with computers, you know that in that\u000d\u000aprocess you draw a circle, then a rectangle, a line, some triangles until you compose the\u000d\u000aimage you want. That process is very similar to writing a letter or a book by hand - it\u000d\u000ais a set of instructions that do one task after another.\u000d\u000aShaders are also a set of instructions, but the instructions are excecuted all at once for\u000d\u000aevery single pixel on the screen. That means the code you write has to behave differently\u000d\u000adepending on the position of the pixel on the screen. Like a type press, your program will\u000d\u000awork as a function that receives a position and returns a color, and when it\u2019s compiled\u000d\u000ait will run extraordinarily fast.\u000d\u000a9","2 Getting started\u000d\u000aFigure 2.2: Chinese movable type\u000d\u000a2.2 Why are shaders fast?\u000d\u000aTo answer this, I present the wonders of parallel processing.\u000d\u000aImagine the CPU of your computer as a big industrial pipe, and every task as something\u000d\u000athat passes through it - like a factory line. Some tasks are bigger than others, which\u000d\u000ameans they require more time and energy to deal with. We say they require more\u000d\u000aprocessing power. Because of the architecture of computers the jobs are forced to run\u000d\u000ain a series; each job has to be finished one at a time. Modern computers usually have\u000d\u000agroups of four processors that work like these pipes, completing tasks one after another\u000d\u000ato keeping things running smoothly. Each pipe is also known as thread.\u000d\u000aVideo games and other graphic applications require a lot more processing power than\u000d\u000aother programs. Because of their graphic content they have to do huge numbers of pixelby-pixel operations. Every single pixel on the screen needs to be computed, and in 3D\u000d\u000agames geometries and perspectives need to be calculated as well.\u000d\u000aLet\u2019s go back to our metaphor of the pipes and tasks. Each pixel on the screen represents\u000d\u000aa simple small task. Individually each pixel task isn\u2019t an issue for the CPU, but (and here\u000d\u000ais the problem) the tiny task has to be done to each pixel on the screen! That means in an\u000d\u000aold 800x600 screen, 480,000 pixels have to processed per frame which means 14,400,000\u000d\u000acalculations per second! Yes! That\u2019s a problem big enough to overload a microprocessor.\u000d\u000aIn a modern 2880x1800 retina display running at 60 frames per second that calculation\u000d\u000a10","2.2 Why are shaders fast?\u000d\u000aFigure 2.3: CPU\u000d\u000aadds up to 311,040,000 calculations per second. How do graphics engineers solve this\u000d\u000aproblem?\u000d\u000aFigure 2.4:\u000d\u000aThis is when parallel processing becomes a good solution. Instead of having a couple of\u000d\u000abig and powerful microprocessors, or pipes, it is smarter to have lots of tiny microprocessors running in parallel at the same time. That\u2019s what a Graphic Processor Unit (GPU)\u000d\u000ais.\u000d\u000aPicture the tiny microprocessors as a table of pipes, and the data of each pixel as a ping\u000d\u000apong ball. 14,400,000 ping pong balls a second can obstruct almost any pipe. But a\u000d\u000atable of 800x600 tiny pipes receiving 30 waves of 480,000 pixels a second can be handled\u000d\u000asmoothly. This works the same at higher resolutions - the more parallel hardware you\u000d\u000a11","2 Getting started\u000d\u000aFigure 2.5: GPU\u000d\u000a12"]