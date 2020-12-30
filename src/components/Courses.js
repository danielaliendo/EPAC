import Imagen from "./../images/Courses/courses-01.jpg";

export const courses = [
    {
        img: Imagen,
        titulo: 'Auxiliar electricista domiciliario',
        destinatarios: 'Este curso está destinado a todos los interesados que quieran aprender en forma práctica electricidad domiciliaria y/o ampliar sus conocimientos prácticos',
        estado: 'Finalizado',
        precio_del_curso: {
            regular: {
                valor_inscripcion: '1.500',
                saldo: {
                    cuotas: {
                        cantidad_de_cuotas: '2',
                        valor_de_cuotas: '1.500'
                    }
                }
            },
        },
        duracion_del_curso: {
            cantidad_de_clases: '12 clases',
            inicio_del_curso: '10/06/2020',
            fin_del_curso: '12/08/2020',
            fin_inscripciones: '09/06/2020'
        },
        clases: {
            dias_y_horario: {
                default: {
                    dias: ['miércoles'],
                    horarios: ['18:30 a 20:30hs']
                },
                opcional: {
                    dias: ['sábados'],
                    horarios: ['18:30 a 20:30hs']
                },
            },
            modalidad: 'Virtual',
            lugar_de_cursado: 'Zoom'
        },
        docente: 'Prof. Mgtr. Pedraza Dante',
        temario: [
            {
                titulo: 'Módulo I',
                contenido: ['Introducción a los materiales eléctricos normalizados y no normalizados para uso en las instalaciones domiciliarias en base a reglamentación de AEA y sello de Seguridad Eléctrica de la provincia'],
                actividad: 'Ejercitación practica'
            },
            {
                titulo: 'Módulo II',
                contenido: ['Introducción a los circuitos eléctricos, ley de Ohm, potencia y energía en kWh, implementación de factura de electricidad de tu casa'],
            },
            {
                titulo: 'Módulo III',
                contenido: ['Protecciones eléctricas básicas: termomagnética y diferencial, armado de tablero eléctricos, jabalina de puesta a tierra'],
            },
            {
                titulo: 'Módulo IV',
                contenido: ['Diseño eléctrico practico de una vivienda: interpretación y confección de plano de tu casa con acometida y circuitos de iluminación y tomacorrientes'],
                actividad: 'Ejercitación practica'
            },
        ],
        id: 'auxiliar-electricista-domiciliario'
    },
    {
        img: Imagen,
        titulo: 'Instalador electricista categoría III',
        destinatarios: null,
        estado: 'Próximo lanzamiento',
        precio_del_curso: {
            regular: {
                valor_inscripcion: '2000',
                saldo: {
                    cuotas: {
                        cantidad_de_cuotas: '3',
                        valor_de_cuotas: '2000',
                    }
                }
            },
        },
        duracion_del_curso: {
            cantidad_de_clases: null,
            inicio_del_curso: null,
            fin_del_curso: null,
            fin_inscripciones: null,
        },
        clases: {
            dias_y_horario: {
                default: {
                    dias: [],
                    horarios: []
                },
                opcional: {
                    dias: [],
                    horarios: []
                },
            },
            modalidad: null,
            lugar_de_cursado: null
        },
        docente: null,
        temario: [
            {
                titulo: 'Módulo I',
                contenido: [],
            },
            {
                titulo: 'Módulo II',
                contenido: [],
            },
            {
                titulo: 'Módulo III',
                contenido: [],
            },
            {
                titulo: 'Módulo IV',
                contenido: [],
            },
        ],
        id: 'instalador-electricista-categoría-III'
    },
    {
        img: Imagen,
        titulo: 'AutoCAD para electricistas',
        destinatarios: "Este curso está diseñado para quien necesite graficar de manera digital cualquier tipo de plano, sin conocimientos previos de AutoCAD",
        estado: 'Finalizado',
        precio_del_curso: {
            regular: {
                valor_inscripcion: '1.500',
                saldo: {
                    cuotas: {
                        cantidad_de_cuotas: '2',
                        valor_de_cuotas: '1500'
                    }
                }
            },
        },
        duracion_del_curso: {
            cantidad_de_clases: '10 clases',
            inicio_del_curso: '14/07/2020',
            fin_del_curso: '15/09/2020',
            fin_inscripciones: '13/07/2020'
        },
        clases: {
            dias_y_horario: {
                default: {
                    dias: ["jueves"],
                    horarios: ["18:30 a 20:30hs"]
                },
                opcional: {
                    dias: [],
                    horarios: []
                },
            },
            modalidad: "Virtual",
            lugar_de_cursado: "Zoom"
        },
        docente: "TEC. Sergio Martinez",
        temario: [
            {
                titulo: 'Módulo I',
                contenido: ["Empezando con AutoCAD - Instalación"],
            },
            {
                titulo: 'Módulo II',
                contenido: ["Comandos de dibujo y edición básicos"],
            },
            {
                titulo: 'Módulo III',
                contenido: ["Dibujos de precisión con AutoCAD"],
            },
            {
                titulo: 'Módulo IV',
                contenido: ["Realizar cambios al dibujo"],
            },
            {
                titulo: 'Módulo V',
                contenido: ["Organizar el dibujo con capas (Layers)"],
            },
            {
                titulo: 'Módulo VI',
                contenido: ["Objetos avanzados - plano unifilar de circuitos, plantas, etc."],
            },
        ],
        id: 'autoCAD-para-electricistas'
    },
    {
        img: Imagen,
        titulo: 'Puntos de conexión',
        destinatarios: 'Este curso está dirigido a idóneos en instalaciones eléctricas que necesiten ampliar sus conocimientos en las diversas configuraciones de puntos de conexión de baja tensión, tanto monofásicos, trifásicos, gran cliente o multimedidor; su marco legal y técnico y nociones de facturación',
        estado: 'Finalizado',
        precio_del_curso: {
            regular: {
                valor_inscripcion: '$ 1.500',
                saldo: {
                    cuotas: {
                        cantidad_de_cuotas: '2',
                        valor_de_cuotas: '$ 1.500',
                    }
                }
            },
        },
        duracion_del_curso: {
            cantidad_de_clases: '10 clases',
            inicio_del_curso: '16/07/2020',
            fin_del_curso: '17/09/2020',
            fin_inscripciones: '15/07/2020'
        },
        clases: {
            dias_y_horario: {
                default: {
                    dias: ['jueves'],
                    horarios: ['18:30 a 20:30hs']
                },
            },
            modalidad: 'virtual',
            lugar_de_cursado: 'Zoom'
        },
        docente: 'TEC. Sergio Martínez - Coautor de la Ley de seguridad eléctrica',
        temario: [
            {
                titulo: 'Módulo I',
                contenido: ['El punto de conexión - marco legal y practico - AEA 95150 - resoluciones ERSeP'],
            },
            {
                titulo: 'Módulo II',
                contenido: ['Materiales - componentes del punto de conexión - Normas IRAM'],
            },
            {
                titulo: 'Módulo III',
                contenido: ['Tipos constructivos I: ET21 – Tipos constructivos T1, T2 y T3'],
            },
            {
                titulo: 'Módulo IV',
                contenido: 'Tipos constructivos II: Multimedidor',
            },
            {
                titulo: 'Módulo V',
                contenido: ['Tipos constructivos III: Puntos de conexión en vía pública'],
            },
            {
                titulo: 'Módulo VI',
                contenido: ['Medidores: Los diversos tipos de medidores unidireccional, bidireccional y su lectura'],
            },
            {
                titulo: 'Módulo VII',
                contenido: ['Facturación: cuadro tarifario, su interpretación y lectura'],
                actividad: 'Trabajos prácticos'
            },
        ],
        id: 'puntos-de-conexión'
    },
    {
        img: Imagen,
        titulo: 'Auxiliar instalador electricista industrial',
        destinatarios: 'Este curso está destinado a instaladores auxiliares electricistas habilitados categoría III del ERSeP, personas que hayan realizado algún curso de “instalador electricista auxiliar”, personas con formación técnica en el área electricidad en los niveles medio (técnicos secundarios) o superior (técnicos terciarios o universitarios) y a personas con conocimientos de instalaciones eléctricas (idóneos)',
        estado: 'En curso',
        precio_del_curso: {
            regular: {
                valor_inscripcion: '$ 1.600',
                saldo: {
                    cuotas: {
                        cantidad_de_cuotas: '2',
                        valor_de_cuotas: '$ 1.600'
                    }
                }
            },
        },
        duracion_del_curso: {
            cantidad_de_clases: '12 clases',
            inicio_del_curso: '30/09/2020',
            fin_del_curso: '16/12/2020',
            fin_inscripciones: '29/09/2020'
        },
        clases: {
            dias_y_horario: {
                default: {
                    dias: ['miércoles'],
                    horarios: ['19:30 a 21:00hs']
                },
                // opcional: {
                //     dia: '',
                //     horario: ''
                // },
            },
            modalidad: 'Virtual',
            lugar_de_cursado: 'Zoom'
        },
        docente: 'T.M. Ignacio Arnoletto - MP 2644/1',
        temario: [
            {
                titulo: 'Módulo I',
                contenido: [
                    'Parámetros y conceptos técnicos básicos asociados a las instalaciones eléctricas ',
                    'Materiales permitidos y prohibidos en las instalaciones eléctricas',
                    'Canalizaciones en instalaciones eléctricas ',
                    'Protecciones y envolventes en instalaciones eléctricas ',
                    'Esquemas de conexión a tierra en las instalaciones eléctricas ',
                ],
            },
            {
                titulo: 'Módulo II',
                contenido: [
                    'Sistemas polifásicos. Generalidades. ',
                    'Motores de inducción asíncronos y síncronos.',
                    'Conexiones estrella triangulo de motores trifásicos. Variadores, arranques suaves.',
                    'Corrección del factor de potencia de las instalaciones eléctricas.',
                    'Generadores eléctricos de respaldo y tableros de transferencia.',
                ],
            },
            {
                titulo: 'Módulo III',
                contenido: [
                    'Seguridad en las instalaciones eléctricas.',
                    'Mantenimiento en las instalaciones eléctricas.',
                    'Accionar profesional, ética laboral, habilidades comerciales.',
                ],
            },
        ],
        id: 'auxiliar-instalador-electricista-industrial',
    },
    {
        img: Imagen,
        titulo: 'Instalación solar fotovoltaica',
        destinatarios: 'Instaladores electricistas, técnicos y otras áreas interesadas con conocimientos básicos de electricidad, que quieran aprender generación de electricidad con sistemas fotovoltaicos',
        estado: 'Finalizado',
        precio_del_curso: {
            regular: {
                valor_inscripcion: '2000',
                saldo: {
                    cuotas: {
                        cantidad_de_cuotas: '2',
                        valor_de_cuotas: '1500',
                    }
                }
            },
        },
        duracion_del_curso: {
            cantidad_de_clases: '10 clases',
            inicio_del_curso: '11/03/2020',
            fin_del_curso: '06/05/2020',
            fin_inscripciones: '10/03/2020'
        },
        clases: {
            dias_y_horario: {
                default: {
                    dias: ['miércoles'],
                    horarios: ['18:30 a 20:30hs']
                },
                opcional: {
                    dias: ['sábados'],
                    horarios: ['18:30 a 20:30hs']
                },
            },
            modalidad: 'Presencial',
            lugar_de_cursado: 'Sede EPAC: Diagonal ICA N° 1538 – B° Talleres Oeste'
        },
        docente: '',
        temario: [
            {
                titulo: 'Módulo I',
                contenido: ['Introducción a los sistemas solares fotovoltaicos'],
            },
            {
                titulo: 'Módulo II',
                contenido: ['Componentes de una instalación solar fotovoltaica'],
            },
            {
                titulo: 'Módulo III',
                contenido: ['Diseño de una instalación fotovoltaica en isla, practica de armado'],
            },
            {
                titulo: 'Módulo IV',
                contenido: ['Diseño de una instalación fotovoltaica conectada de red'],
            },
            {
                titulo: 'Módulo IV',
                contenido: ['Leyes y reglamentaciones nacionales de generación de energía renovable'],
            },
        ],
        id: 'instalación-solar-fotovoltaica',
    },
    {
        img: Imagen,
        titulo: 'Entorno electromagnético para la informática y telecomunicación',
        destinatarios: 'Destinado a todos los instaladores y profesionales que trabajen en el área de informática y telecomunicaciones, que les permitirá conocer el entorno electromagnético que rodea a estos sistemas',
        estado: 'Próximo lanzamiento',
        precio_del_curso: {
            regular: {
                valor_inscripcion: '2000',
                saldo: {
                    cuotas: {
                        cantidad_de_cuotas: '3',
                        valor_de_cuotas: '2000',
                    }
                }
            },
        },
        duracion_del_curso: {
            cantidad_de_clases: '',
            inicio_del_curso: '',
            fin_del_curso: '',
            fin_inscripciones: ''
        },
        clases: {
            dias_y_horario: {
                default: {
                    dias: [],
                    horarios: []
                },
                opcional: {
                    dias: [],
                    horarios: []
                },
            },
            modalidad: '',
            lugar_de_cursado: ''
        },
        docente: '',
        temario: [
            {
                titulo: 'Módulo I',
                contenido: ['Especificaciones técnicas de los equipamientos de informática y telecomunicaciones.'],
            },
            {
                titulo: 'Módulo II',
                contenido: ['Planeación e instalación de las redes eléctricas para los sistemas de telecomunicaciones e informática.'],
            },
            {
                titulo: 'Módulo III',
                contenido: ['Cableado de potencia y señal débil en las instalaciones subterráneas y aéreas.'],
            },
            {
                titulo: 'Módulo IV',
                contenido: ['Selección de protecciones de los distintos circuitos bajo normas IRAM, IEC. Interferencia de campos.'],
            },
                        {
                titulo: 'Módulo IV',
                contenido:['Monitoreo y relevamiento de las instalaciones.'],
                actividad: 'Ejercitación practica'
            },
        ],
        id: 'entorno-electromagnético-para-la-informática-y-telecomunicación',
    },
    {
        img: Imagen,
        titulo: 'Instrumental y mediciones eléctricas',
        destinatarios: 'Destinado a todos los instaladores y profesionales que trabajen en el área de informática y telecomunicaciones, que les permitirá conocer el entorno electromagnético que rodea a estos sistemas.',
        estado: 'Próximo lanzamiento',
        precio_del_curso: {
            regular: {
                valor_inscripcion: '2000',
                saldo: {
                    cuotas: {
                        cantidad_de_cuotas: '3',
                        valor_de_cuotas: '2000',
                    }
                }
            },
        },
        duracion_del_curso: {
            cantidad_de_clases: '',
            inicio_del_curso: '',
            fin_del_curso: '',
            fin_inscripciones: ''

        },
        clases: {
            dias_y_horario: {
                default: {
                    dias: [],
                    horarios: []
                },
                opcional: {
                    dias: [],
                    horarios: []  
                },
            },
            modalidad: '',
            lugar_de_cursado: ''
        },
        docente: '',
        temario: [
            {
                titulo: 'Módulo I',
                contenido: ['Principios y fundamentos de las mediciones eléctricas: óhmetro, voltímetro, amperímetro, medidor de inductancia, medidor de capacitancia y medidor de temperatura.'],
            },
            {
                titulo: 'Módulo II',
                contenido: ['Instrumentos básicos de medición: clasificación y principios de funcionamiento de tester TRUE RMS, pinza amperométrica AC/DC, secuencimetro y fasímetro.'],
            },
            {
                titulo: 'Módulo III',
                contenido: ['Instrumentales avanzados de medición: analizadores de energía, osciloscopio industrial, termógrafos, medidores de lazo, probador de diferenciales, probador SPD.'],
            },
            {
                titulo: 'Módulo IV',
                contenido: ['Presentación de informe: captura y registro de gráficos, interpretación de variables, conclusiones del informe.'],
            },
        ],
        id: 'instrumental-y-mediciones-eléctricas',
    },
    {
        img: Imagen,
        titulo: 'Puesta a tierra y medición atmosférica',
        destinatarios: 'Este curso está dirigido a los instaladores electricistas de todas las categorías y profesiones afines que necesitan realizar mediciones y sus respectivas certificaciones.',
        estado: 'Próximo lanzamiento',
        precio_del_curso: {
            regular: {
                valor_inscripcion: '2000',
                saldo: {
                    cuotas: {
                        cantidad_de_cuotas: '3',
                        valor_de_cuotas: '2000',
                    }
                }
            },
        },
        duracion_del_curso: {
            cantidad_de_clases: '',
            inicio_del_curso: '',
            fin_del_curso: '',
            fin_inscripciones: ''
        },
        clases: {
            dias_y_horario: {
                default: {
                    dias: [],
                    horarios: []
                },
                opcional: {
                    dias: [],
                    horarios: []
                },
            },
            modalidad: '',
            lugar_de_cursado: ''
        },
        docente: '',
        temario: [
            {
                titulo: 'Módulo I',
                contenido: ['El sistema de puesta a tierra, definiciones, partes y componentes, AEA 90364-5.'],
            },
            {
                titulo: 'Módulo II',
                contenido: ['Aspectos geotécnicos, geomorfológicos y geofísicos de los suelos.'],
            },
            {
                titulo: 'Módulo III',
                contenido: ['Materiales - componentes del sistema de puesta a tierra - Normas IRAM 2309, 2310, 2314, etc.'],
            },
            {
                titulo: 'Módulo IV',
                contenido: ['Régimen del neutro, calificación de los tipos de Pat y su implementación'],
            },
            {
                titulo: 'Módulo V',
                contenido: ['Diseño y cálculo de PAT, métodos de medición de PAT, instrumental adecuado bajo AEA 9036-6.'],
            },
            {
                titulo: 'Módulo VI',
                contenido: ['Ley de SHL, resolución 900/2014 - SRT, resoluciones de ERSeP'],
            },
        ],
        id: 'puesta-a-tierra-y-medición-atmosférica',
    },
    {
        img: Imagen,
        titulo: 'Electrónica industrial',
        destinatarios: '',
        estado: 'Próximo lanzamiento',
        precio_del_curso: {
            regular: {
                valor_inscripcion: '2000',
                saldo: {
                    cuotas: {
                        cantidad_de_cuotas: '3',
                        valor_de_cuotas: '2000',
                    }
                }
            },
        },
        duracion_del_curso: {
            cantidad_de_clases: '',
            inicio_del_curso: '',
            fin_del_curso: '',
            fin_inscripciones: ''
        },
        clases: {
            dias_y_horario: {
                default: {
                    dias: [],
                    horarios: []
                },
                opcional: {
                    dias: [],
                    horarios: []
                },
            },
            modalidad: '',
            lugar_de_cursado: ''
        },
        docente: '',
        temario: [
            {
                titulo: 'Módulo I',
                contenido: [],
            },
            {
                titulo: 'Módulo II',
                contenido: [],
            },
            {
                titulo: 'Módulo III',
                contenido: [],
            },
            {
                titulo: 'Módulo IV',
                contenido: [],
            },
        ],
        id: 'electrónica-industrial',
    },
    {
        img: Imagen,
        titulo: 'Capacitación a empresas',
        destinatarios: '',
        estado: 'Próximo lanzamiento',
        precio_del_curso: {
            regular: {
                valor_inscripcion: '2000',
                saldo: {
                    cuotas: {
                        cantidad_de_cuotas: '3',
                        valor_de_cuotas: '2000',
                    }
                }
            },
        },
        duracion_del_curso: {
            cantidad_de_clases: '',
            inicio_del_curso: '',
            fin_del_curso: '',
            fin_inscripciones: ''

        },
        clases: {
            dias_y_horario: {
                default: {
                    dias: [],
                    horarios: []
                },
                opcional: {
                    dias: [],
                    horarios: []
                },
            },
            modalidad: '',
            lugar_de_cursado: ''
        },
        docente: '',
        temario: [
            {
                titulo: 'Módulo I',
                contenido: [],
            },
            {
                titulo: 'Módulo II',
                contenido: [],
            },
            {
                titulo: 'Módulo III',
                contenido: [],
            },
            {
                titulo: 'Módulo IV',
                contenido: [],
            },
        ],
        id: 'capacitación-a-empresas',
    },
]
