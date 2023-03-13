import React from 'react';
import CustomSelect from './MultipleSelector';

const styles={
  app:{
    // backgroundColor:'rgba(0,0,0,0.1)',
    justifyItems:'center',
    alignItems:'center',
    display:'grid',
    color:'rgba(0,0,100,1)',
    // gridTemplateColumns:'1fr',
    fontSize:'12px'
  },
  select:{
    maxWidth:'100px'
  }
}

function Option({options,onChangeInput}) {
  return (
    <div style={styles.app}>
      <CustomSelect isMulti={true} style={styles.select} defaultValue={[options[0]]} onChange={onChangeInput} options={options} />
    </div>
  );

  
}

export default Option;