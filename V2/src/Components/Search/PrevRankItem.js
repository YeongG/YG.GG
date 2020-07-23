import React, { useEffect } from 'react';
import {
    PrevRankItemWrap
} from './styled';

const PrevRankItem = ({season,rank}) => {
    useEffect(() => {
        console.log("PrevRankItem 랜더링");
    });
    return (
        <PrevRankItemWrap>
            <b>{season}</b> {rank}
        </PrevRankItemWrap>
    );
}

export default PrevRankItem