<template>
    <div class="sample-header">
        <h2>Header Component</h2>
        <div class="sample-grid">
            <p>Hyper Header</p>
            <div v-if="username !== ''">
              <p>Hello {{ username }}</p>
              <button class="sample-button" @click="_signOut">Sign Out</button>
            </div>
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
  import { getCurrentUser, signOut } from 'aws-amplify/auth';

  // 現在のセッションからユーザ名を取得
  const currentUser = await getCurrentUser()
  const username: Ref<string> = ref(currentUser.username);

  const _signOut = async () => {
    try{
      await signOut();
      navigateTo('/login')
    } catch(error: any){
      console.error('error signing out: ', error.code + ":" + error.message + ":" + error.name)
    }
  }

</script>

<style>
.sample-header {
  background-color: #f0f0f0; /* 薄いグレーの背景色 */
  padding: 20px; /* 適切な余白やパディングを設定 */
  text-align: center; /* テキストを中央寄せにするなど、デザインに合わせて調整 */
  display: flex;
  flex-direction: column;
  align-items: center;
}

.sample-grid {
  display: grid;
  grid-template-columns: auto 1fr; /* 列の幅を指定（左: auto, 右: 1fr） */
  gap: 10px; /* 列と列の間隔を指定 */
  align-items: center; /* 垂直方向（縦）の中央寄せ */
}

.sample-grid p {
  margin: 0; /* pタグのデフォルトマージンをリセット */
}
</style>