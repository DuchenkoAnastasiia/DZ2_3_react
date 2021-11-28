import styles from "./Food.module.css";

const Food = () => {
    return (
        <>
            <h1 className={styles.title}>Шарлотка с яблоками 🍎</h1>
            <img className={styles.img_1} src="https://academy.oetker.ru/upload/ammina.optimizer/jpg-webp/q80/upload/resize_cache/iblock/c47/540_800_1/c47fae2a5fcbe95c2b1e9682b761db78.webp" alt="-" />
            <h3>Ингридиенты:</h3>
            <p>Ванильный сахар - 1 ч.л.</p>
            <p>Сахарная пудра - 2 ст.л.</p>
            <p>Разрыхлитель теста - 1 ч.л.</p>
            <p>Яйцо - 4 шт.</p>
            <p>Сахар - 100 г</p>
            <p>Мука - 100 г</p>
            <p>Яблоки - 4 шт.</p>
            <h3 className={styles.title}>Способ приготовления:</h3>
            <img className={styles.img} src="https://academy.oetker.ru/upload/ammina.optimizer/jpg-webp/q80/upload/resize_cache/uf/2df/375_375_0/2dff2583b29ff1bc30713159c5434faa.webp" alt="-"/>
            <p className={styles.text}>Для приготовления шарлотки нам понадобятся четыре некрупных яблока, лучше отдавать предпочтение кислым сортам. Очищаем яблоки от плодоножек и семечек, нарезаем тонкими дольками.</p>
            <img className={styles.img} src="https://academy.oetker.ru/upload/ammina.optimizer/jpg-webp/q80/upload/resize_cache/uf/44e/375_375_0/44e3fa07e930b004429180696ed50db2.webp" alt="-"/>
            <p className={styles.text}>Для приготовления теста просеиваем муку с разрыхлителем. Оставляем на время.</p>
            <img className={styles.img} src="https://academy.oetker.ru/upload/ammina.optimizer/jpg-webp/q80/upload/resize_cache/uf/fe1/375_375_0/fe1146a5d4508e875b177d2b16a70187.webp" alt="-"/>
            <p className={styles.text}>Охлажденные куриные яйца разбиваем в высокую посуду и взбиваем с помощью миксера, постепенно увеличивая скорость. Добавляем сахарный песок. Продолжаем взбивать, пока масса не посветлеет и не увеличится в объеме.</p>
            <img className={styles.img} src="https://academy.oetker.ru/upload/ammina.optimizer/jpg-webp/q80/upload/resize_cache/uf/e06/375_375_0/e06abf9dc86bf46534c164601f714af5.webp" alt="-"/>
            <p className={styles.text}>Ставим скорость миксера на минимум и постепенно добавляем просеянную муку с разрыхлителем. Тесто должно получиться густым, как сметана, и быть однородным.</p>
            <img className={styles.img} src="https://academy.oetker.ru/upload/ammina.optimizer/jpg-webp/q80/upload/resize_cache/uf/5eb/375_375_0/5eb22098fb12614114837fa8fcf5558a.webp" alt="-"/>
            <p className={styles.text}>Форму для выпечки смазываем сливочным маслом и присыпаем мукой (можно вместо муки посыпать панировочными сухарями с сахаром, так у готовой шарлотки появится хрустящая карамельная корочка) Кладем в форму подготовленные яблочные дольки, равномерно распределяем</p>
            <img className={styles.img} src="https://academy.oetker.ru/upload/ammina.optimizer/jpg-webp/q80/upload/resize_cache/uf/c92/375_375_0/c920290342903785ec6826d9ff9e8f82.webp" alt="-"/>
            <p className={styles.text}>С помощью ложки или лопатки перекладываем тесто в форму, покрывая яблоки, и разравниваем.</p>
            <img className={styles.img} src="https://academy.oetker.ru/upload/ammina.optimizer/jpg-webp/q80/upload/resize_cache/uf/68e/375_375_0/68e1f2ab8c6bd8862403925ee86e319a.webp" alt="-"/>
            <p className={styles.text}>Разогреваем духовку до 170 градусов. Ставим форму на решётку и отправляем в духовку на 30–35 минут. Когда шарлотка увеличится в объеме и станет светло-коричневого цвета, достаем ее из духовки, немного остужаем и вынимаем из формы. Лучше всего перевернуть тёплую шарлотку на решётку и дать ей остыть, так пирог получится более ровным.</p>
            <img className={styles.img} src="https://academy.oetker.ru/upload/ammina.optimizer/jpg-webp/q80/upload/resize_cache/uf/60a/375_375_0/60a1fa1e5030921855d2982d070a189b.webp" alt="-"/>
            <p className={styles.text}>Готовую воздушную шарлотку, с помощью мелкого сита, посыпаем сахарной пудрой и, нарезав на порционные кусочки, подаем к столу.</p>
            <h3 className={styles.title}>Приятного аппетита!</h3>
            <img className={styles.img_2} src="https://academy.oetker.ru/upload/ammina.optimizer/jpg-webp/q80/upload/resize_cache/uf/c92/375_375_0/c92abec06a50c1b0f47f9a94a4c02fd3.webp" alt="-" />
        </>
    );
};


export default Food;