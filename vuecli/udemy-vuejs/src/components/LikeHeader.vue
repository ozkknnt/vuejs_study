<template>
    <div>
        <!-- 親の中にslotのコンテンツがない場合に表示されるフォールバックコンテンツ -->
        <slot name="title">デフォルトのタイトル</slot> 
        <slot></slot>
        <hr>
        <slot name="number" >デフォルトのタイトル</slot> 
        
    </div>
</template>

<script>
export default {
    props: ["headerText"]
}
</script>