import manual from "./../files/Manual.pdf"
import imag from "./../images/Library/ManualInstaladorElectricistaCategoriaIIISegundaEdicion.jpg"

import ComprendioDeLeyesTomo1SegundaEdicion from "./../files/ComprendioDeLeyesTomo1SegundaEdicion.pdf"
import imgComprendioDeLeyesTomo1SegundaEdicion from "./../images/Library/ComprendioDeLeyesTomo1SegundaEdicion.png"

import ComprendioDeLeyesTomo2 from "./../files/ComprendioDeLeyesTomo2.pdf"
import ImgComprendioDeLeyesTomo2 from "./../images/Library/imgComprendioDeLeyesTomo2.png"

import ManualAlumbradoPublico2018 from "./../files/ManualAlumbradoPublicoCordoba2018.pdf"
import ImgManualAlumbradoPublico2018 from "./../images/Library/imgManualAlumbradoPublicoCordoba2018.png"

import ModernoTratadoDePuestaATierra from "./../files/ModernoTratadoDePuestaATierra.pdf"
import imgModernoTratadoDePuestaATierra from "./../images/Library/imgModernoTratadoDePuestaATierra.png"

import GeneracionRenovableDistribuida from "./../files/GeneracionRenovableDistribuida.pdf"
import imgGeneracionRenovableDistribuida from "./../images/Library/imgGeneracionRenovableDistribuida.png"



export const books = [
    {
        title: "Manual del instalador electricista categoría III (segunda edición)",
        href: manual,
        srcImg: imag,
    },
    {
        title: "Manual Alumbrado Público - 2018",
        href: ManualAlumbradoPublico2018,
        srcImg: ImgManualAlumbradoPublico2018,
    },
    {
        title: "Comprendio de Leyes de Energía Eléctrica y su Articulación - Tomo I - 2° Edicion",
        href: ComprendioDeLeyesTomo1SegundaEdicion,
        srcImg: imgComprendioDeLeyesTomo1SegundaEdicion,
    },
    {
        title: "Comprendio de Leyes de Energía Eléctrica y su Articulación - Tomo II",
        href: ComprendioDeLeyesTomo2,
        srcImg: ImgComprendioDeLeyesTomo2,
    },
    {
        title: "Generación distribuida renovable",
        href: GeneracionRenovableDistribuida,
        srcImg: imgGeneracionRenovableDistribuida,
    },
    {
        title: "Moderno tratado de puesta a tierra",
        href: ModernoTratadoDePuestaATierra,
        srcImg: imgModernoTratadoDePuestaATierra,
    },
]
