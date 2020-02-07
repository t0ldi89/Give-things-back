
import React, {useState} from"react";


const ThreeColumnsComponent = ()=>{
    const bags = useState(10);
    const organization = useState(5);
    const collection = useState(7);
    return( 
        <>
<div className='threeColumnsComponent col-dsk-12'>
<div className='col-dsk-4 columns'>
<div className='howManyBags'>{bags}</div>
<div>ODDANYCH WORKÓW</div>
<div className='loremText'>Lorem ipsum dolor sit amet neque. In quam hendrerit laoreet. Sed diam elementum eu, nisl. 
Vestibulum vitae leo. Mauris ultrices. Vestibulum non sem tincidunt tempus. 
     </div>
</div>
<div className='col-dsk-4 columns'>
<div className='howManyBags'>{organization}</div>
<div>WSPARTYCH ORGANIZACJI</div>
<div className='loremText'>Lorem ipsum dolor sit amet neque. In quam hendrerit laoreet. Sed diam elementum eu, nisl. 
Vestibulum vitae leo. Mauris ultrices. Vestibulum non sem tincidunt tempus. 
     </div>
</div>
<div className='col-dsk-4 columns'>
<div className='howManyBags'>{collection}</div>
<div>ZORGANIZOWANYCH ZBIÓREK</div>
<div className='loremText'>Lorem ipsum dolor sit amet neque. In quam hendrerit laoreet. Sed diam elementum eu, nisl. 
Vestibulum vitae leo. Mauris ultrices. Vestibulum non sem tincidunt tempus. 
     </div>
</div>
</div>
</>
    )
    }

export default ThreeColumnsComponent