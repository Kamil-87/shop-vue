<template>
    <div class="content__parameters">
        <div class="parameters__trending">
            <h5 class="parameters__h5">Trending now</h5>
            <ul class="parameters__trending__ul">
                <li class="parameters__trending__list">
                    <a href="#" class="parameters__trending__link">Bohemian</a>
                </li>
                <li class="parameters__trending__list">
                    <a href="#" class="parameters__trending__link">Floral</a>
                </li>
                <li class="parameters__trending__list">
                    <a href="#" class="parameters__trending__link">Lace</a>
                </li>
                <li class="parameters__trending__list">
                    <a href="#" class="parameters__trending__link">Floral</a>
                </li>
                <li class="parameters__trending__list">
                    <a href="#" class="parameters__trending__link">Lace</a>
                </li>
                <li class="parameters__trending__list">
                    <a href="#" class="parameters__trending__link">Bohemian</a>
                </li>
            </ul>
        </div>
        <div class="parameters__size">
            <h5 class="parameters__h5">Size</h5>
            <div class="parameters__flex">
                <input
                        type="checkbox"
                        id="XXS"
                        class="parameters__size__checkbox"
                />
                <label for="XXS" class="parameters__size__label">XXS</label>

                <input
                        type="checkbox"
                        id="XS"
                        class="parameters__size__checkbox"
                />
                <label for="XS" class="parameters__size__label">XS</label>

                <input
                        type="checkbox"
                        id="S"
                        class="parameters__size__checkbox"
                />
                <label for="S" class="parameters__size__label">S</label>

                <input
                        type="checkbox"
                        id="M"
                        class="parameters__size__checkbox"
                />
                <label for="M" class="parameters__size__label">M</label>

                <input
                        type="checkbox"
                        id="L"
                        class="parameters__size__checkbox"
                />
                <label for="L" class="parameters__size__label">L</label>

                <input
                        type="checkbox"
                        id="XL"
                        class="parameters__size__checkbox"
                />
                <label for="XL" class="parameters__size__label">XL</label>

                <input
                        type="checkbox"
                        id="XXL"
                        class="parameters__size__checkbox"
                />
                <label for="XXL" class="parameters__size__label">XXL</label>
            </div>
        </div>
        <div class="parameters__price">
            <h5 class="parameters__h5">pRICE</h5>
            <label class="parameters__price__label">
                <input
                        type="range"
                        min="0"
                        max="100000"
                        class="parameters__price__range"
                />
            </label>
            <div class="parameters__price__flex">
                <p class="parameters__price__min">&#36;<span>52</span></p>
                <p class="parameters__price__max">&#36;<span>400</span></p>
            </div>
        </div>
    </div>
</template>