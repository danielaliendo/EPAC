import React from 'react';
import "./../styles/Articles.css";

const Articles = () => {
    return (
        <div className="cnt flxBxClumn">

            <div class="cnt-title">
                <h2 className="title">Artículos</h2>
                <div class="border">
                </div>
            </div>

            <div className="cnt-content articles flxBxClumn">
                <div className="article">
                    <h3 className="art-title">
                        La energía y su diferencial
                    </h3>
                    <p className="art-description">
                        Se le denomina fluido a un tipo de medio continuo formado por alguna sustancia entre cuyas partículas solo hay una fuerza de atracción débil. Una propiedad definitoria es que los fluidos pueden variar sus características físicas y volver a su estado de equilibrio. Las partículas que forman el fluido se mantienen vinculadas entre sí por fuerzas cohesivas débiles y son contenidas por el recipiente que las engloba y condiciona sus parámetros como es el caso de los gases y los líquidos. Se comparten propiedades como fuerza, tensión, presión, potencia  y energía.<br />
                        Estas propiedades se mantienen en el mundo tanto molecular como atómico. Pero en todos los casos el comportamiento más importante es la energía y sus propiedades.<br />
                        La energía es la capacidad que tiene la materia de producir trabajo en forma de calor, luz movimiento, química, etc.
                        La energía no se pierde, no se crea, no se destruye ni se renueva, se transfiere y/o transforma. Esto es lo que ha permitido a la ciencia lograr los avances que se tienen hoy en día. La gran clasificación de la energía es en potencial y cinética, que ambas se complementan y están presentes en todas las aplicaciones. Si cabe aclarar que las fuentes de energía pueden ser renovables pero no la energía.
                        Si hablamos de presión, temperatura o tensión eléctrica, se necesita una diferencial de algunos de estos parámetros para que después pueda fluir la materia.
                        Cuando tenemos mayor presión en un extremo a otro de menor presión en una cañería con un determinado fluido, aparece un diferencial de presión que nos permitirá realizar un trabajo.<br />
                    </p>
                    <p className="formula">
                        ΔP = PM - Pm
                    </p>
                    <p>
                        Lo mismo sucede con la variación de temperatura de los cuerpos:<br />
                    </p>
                    <p className="formula">
                        ΔT = TM – Tm
                    </p>
                    <p>
                        Y en el caso de la electricidad es similar en cuanto al comportamiento de las cargas, fluyen desde el mayor potencial eléctrico al menor potencial:<br />
                    </p>
                    <p className="formula">
                        ΔV = VM – Vm
                    </p>
                    <p>
                        De estos principios conceptuales básicos, surgen la mayoría de las leyes de la física aplicada, y veremos en especial aplicada a la electricidad que cuenta con muchísimos teoremas, principios y leyes que no todos son muy conocidos. <br />
                        <br />
                        Prof. Mgtr. Pedraza Dante
                    </p>
                </div>
                <div className="article">
                    <h3 className="art-title">
                        Audiovisuales de Electricidad en Internet
                    </h3>
                    <p className="art-description">
                        Es muy sencillo ingresar a Internet y que nos muestre un abanico interminable de opciones con diverso tipo de contenidos que el público en general puede acceder. En este inmenso mosaico encontramos todas las variedades de productos, tecnologías y técnicas del arte de la electrotecnia donde obtener recetas para aplicar en la práctica en nuestras instalaciones y sus equipamientos. En estas circunstancias es conveniente conocer cuáles son los criterios de búsqueda que se debería emplear para acceder a la información correcta para que después la podamos aplicar en la práctica. No es lo más significativo… “ni el título del tema”… “ni quien lo dice”… “ni como lo dice”. Lo importante es la fuente en que se respalda. Son aquellas fuentes que tienen un respaldo legal y técnico de las entidades que están a cargo de crear, difundir y enseñar los contenidos y las prácticas adecuadas a los requerimientos que son válidos, en especial en nuestro país. Esas fuentes son las que debemos verificar su validez y alcance tanto legal como técnico. En internet encontramos información de diversas regiones o países del mundo que no son aplicables totalmente a la Argentina aunque sean parecidas. Aun dentro de nuestro mismo país se encuentran diversas opiniones y/o apreciaciones sobre distintos aspectos técnicos sin mencionar ninguna fuente formal. Pero lo correcto es recurrir a las fuentes que sí son legales, y nos debemos basar en las leyes relaciones con el área eléctrica, solo basta con mencionar desde la ley nacional de Seguridad e Higiene nº 19.587 del año 1972, hasta la ley nacional nº 27.424 de Régimen de Fomento a la Generación de Energía Renovable Integrada a la Red Eléctrica Pública del año 2018. En el medio existe un abanico de leyes, decretos reglamentarios y resoluciones aplicables, y además leyes de algunas provincias que a nivel nacional no existen, como es la ley de Seguridad Eléctrica tan necesaria para nuestra sociedad y el país que se encuentra en vía de desarrollo. Todas ellas nos dan información de cómo debemos proceder, y dan respaldo a las instituciones reconocidas oficialmente de IRAM e AEA, quienes nos especifican los productos normalizados, certificados y las reglas del buen arte para aplicar en las instalaciones y sus productos a través de las normas y reglamentos emitidos oficialmente por ellas. <br />
                        Los productos deben tener los sellos correspondientes de su certificación, y no debemos confundir “producto fabricado bajo….” “o producto ensayado bajo….”, ya que no tienen el certificado final que le otorga el sello visible para todos los usuarios.  El usar materiales que cumplan estas condiciones legales garantiza nuestro trabajo técnico y exime de responsabilidad al instalador sobre el producto, ya que es responsabilidad del fabricante. <br />
                        En internet se encuentra mucha información escrita y audiovisual errónea, desactualizada, sin referencias y sin medidas de segundad tanto para el usuario como para el instalador electricista. Para evitar caer en esto, nuestro motor de búsqueda debe ser una fuente confiable en base a especificaciones técnicas normalizadas y reglamentarias oficiales que nos permitan realizar un trabajo seguro y confiable. Cabe agregar como sugerencia que el instalador incorpore como una praxis saludable utilizar una ficha clara y sencilla a modo de Intervención Técnica para cada trabajo realizado, donde firman el usuario y el instalador responsable. También es conveniente documentar una instalación con fotos, unifilar, materiales utilizados, etc.; esto da seriedad al trabajo realizado. No existe mayor satisfacción que el trabajo bien realizado, que transmite tranquilidad y seguridad a nuestros clientes.<br />
                        <br />
                        Prof. Mgtr. Pedraza Dante –EPAC Córdoba  Agosto 2020

                    </p>
                </div>
            </div>
        </div>
    );
}

export default Articles;