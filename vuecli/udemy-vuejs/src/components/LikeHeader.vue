<template>
    <div>
        <!-- 親の中にslotのコンテンツがない場合に表示されるフォールバックコンテンツ -->
        <!-- <slot name="title" v-bind:user="user" text="text">デフォルトのタイトル</slot>  -->
        <slot></slot>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                firstName: "Jack",
                lastName: "Donald"
            }
        };
    }
};
</script>