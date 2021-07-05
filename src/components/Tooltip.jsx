import React, { useState, useRef, useEffect } from 'react';

import './Tooltip.css';

const Tooltip = ({ children, content, location }) => {
    const [show, setShow] = useState(false);
    const tooltipEl = useRef();
    const clickOutside = (e) => {
        console.log(e.target)
        if (!tooltipEl.current.contains(e.target))
            // クリックしたところが、containerのdivの子孫かどうかを真偽値で返す。
            setShow(false);
    }

    useEffect(() => {                                               //(2)
        console.log('レンダリング開始');
        document.addEventListener('click', clickOutside);
        // 初回のレンダリング時に、clickOutsideの関数をクリックされた時にする！（非同期）をセットする。
        // とにかくクリックされた時にどこ触ってもclickOutsideを実行するもの。
    }, []);
    // 第二引数はからの配列なので、更新はされない。

    // function closeTips() {                                       //(1)
    //     setShow(!show);
    //     document.addEventListener('click', clickOutside);
    // }

    return (
        <div className="container" ref={tooltipEl}>
            <div
                // onMouseEnter={() => setShow(true)}
                // onMouseLeave={() => setShow(false)}
                onClick={setShow(!show)}                            //(2)
            // onClick={closeTips}                                  //(1)
            >{children}</div>
            {/* 親コンポーネントの呼び出されたところのネストされた部分に影響される。
            今回でいうとbutton, pはchildrenのpropsに値する */}
            {show && <div className={location}>{content}</div>}
        </div>
    )
}

export default Tooltip;