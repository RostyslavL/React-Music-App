import { v4 as uuidv4} from 'uuid';

function chillHop(){
    return [
        {
            name: "AMNESIA",
            artist: "l19u1d",
            style: "PHONK",
            cover:"./covers/cover_1.jpg",
            id:uuidv4(),
            active:true,
            color:['#BA4A46','#FDF0DD'],
            audio:"./audio/l19u1d PHONK - AMNESIA.mp3"
        },
        {
            name: "Perfect Storm",
            style: "Jazz",
            artist: "Aviino",
            cover:"https://chillhop.com/wp-content/uploads/2021/09/a2d710149876c8e0c9fb097840b2438fbc21bd37-1024x1024.jpg",
            id:uuidv4(),
            active:false,
            color:['#BA4A46','#FDF0DD'],
            audio:"https://mp3.chillhop.com/serve.php/?mp3=9363"
        },
        {
            name: "HIATUS PROD. SHADXWEVIL",
            style: "PHONK",
            artist: "EVILMANE",
            cover:"./covers/cover_2.jpg",
            id:uuidv4(),
            active:false,
            color:['#BA4A46','#FDF0DD'],
            audio:"./audio/EVILMANE - HIATUS (PROD. SHADXWEVIL).mp3"
        },
        {
            name: "Топ Дог",
            style: "PHONK",
            artist: "Криминальный Бит",
            cover:"./covers/cover_3.jpg",
            id:uuidv4(),
            active:false,
            color:['#BA4A46','#FDF0DD'],
            audio:"./audio/Криминальный Бит - Топ Дог.mp3"
        },
        {
            name: "I GOT 6 SLUGS AND THEY ALL WANNA MEET U",
            style: "PHONK",
            artist: "PURE ANNA",
            cover:"./covers/cover_4.jpg",
            id:uuidv4(),
            active:false,
            color:['#BA4A46','#FDF0DD'],
            audio:"./audio/I GOT 6 SLUGS AND THEY ALL WANNA MEET U.mp3"
        },
        {
            name: "ARMED",
            style: "PHONK",
            artist: "l19u1d",
            cover:"./covers/cover_5.jpg",
            id:uuidv4(),
            active:false,
            color:['#BA4A46','#FDF0DD'],
            audio:"./audio/ARMED [OUT NOW].mp3"
        },
        {
            name: "LAVA METAL PHONK",
            style: "PHONK",
            artist: "l19u1d",
            cover:"./covers/cover_6.jpg",
            id:uuidv4(),
            active:false,
            color:['#BA4A46','#FDF0DD'],
            audio:"./audio/LAVA - METAL PHONK.mp3"
        },
    ]
    
}
export default chillHop