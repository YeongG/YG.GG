import React from 'react';
import {
    PrevRankItemWrap
} from './styled';

const PrevRankItem = ({season,rank}) => {
    return (
        <PrevRankItemWrap>
            <b>{season}</b> {rank}
        </PrevRankItemWrap>
    );
}

export default PrevRankItem