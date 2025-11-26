import React from "react";
import * as S from "./styles";


export const MapLocation: React.FC = () => {
    return(
        <S.MapContainer>
        <iframe
                title="localização-mapa"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.408225999736!2d-46.5339387!3d-18.5556256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94aef5857b3e380f%3A0x59963e0a96eebee0!2sElias%20Mello%20Innovation%20in%20Design!5e0!3m2!1sen!2sbr!4v1764125881861!5m2!1sen!2sbr"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </S.MapContainer>
    );
};