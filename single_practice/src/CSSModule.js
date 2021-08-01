import React from 'react';
import styles from './CSSModule.module.css';
//파일 이름 뒤에 .module.css를 붙이면 자동으로 파일명_클래스명_해시값으로 클래스로 자동으로 만들어준다. 

const CSSModule = () => {
    return (
        <div className={`${styles.wrapper} ${styles.inverted}`}>
            안녕하세요. 저는 <span className="something">CSS Module!</span>
            
        </div>
    );

};
//console.log(styles);

export default CSSModule;