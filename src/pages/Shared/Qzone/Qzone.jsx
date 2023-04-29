import React from 'react';
import qzone1 from '../../../assets/qZone1.png'
import qzone2 from '../../../assets/qZone2.png'
import qzone3 from '../../../assets/qZone3.png'

const Qzone = () => {
    return (
        <div className='bg-secondary mt-3 px-2 py-2 rounded'>
            <h4>Qzone</h4>
            <div>
                <img className='w-100 py-3' src={qzone1} alt="" />
                <img className='w-100 py-3' src={qzone2} alt="" />
                <img className='w-100 py-3' src={qzone3} alt="" />
            </div>
        </div>
    );
};

export default Qzone;