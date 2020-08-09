<template>
  <section>
    <navigation></navigation>
    <h5 class="center-align">To Do List</h5>
    <div class="ui container">
      <div class="row">
        <div class="ui input">
          <input
            id="new_todo"
            type="text"
            class="validate"
            v-model="todo.title"
          />
        </div>
        <div class="input-field col s2">
          <button class="ui primary button" @click="addTodo">Add</button>
        </div>
      </div>
    </div>
    <ul class="collection with-header">
      <li class="collection-item" v-for="todo in todos" :key="todo.id">
        <span class="deleteIcon" @click="deleteToDo(todo.id)">✕</span>
        {{ todo.title }}
        <span class="secondary-content">
          <label>
            <input
              type="checkbox"
              class="filled-in"
              :checked="todo.isCompleted"
              @change="updateTodoItem(todo.id, $event)"
            />
            <span></span>
          </label>
        </span>
      </li>
    </ul>
  </section>
</template>

<script>
import navigation from "@/components/NavBar.vue";
import firebase from "firebase";

export default {
  components: { navigation },
  data() {
    return {
      todos: [],
      todo: {
        title: ""
      }
    };
  },
  created() {
    this.getTodos();
  },
  methods: {
    addTodo() {
      firebase
        .firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .collection("todos")
        .add({
          title: this.todo.title,
          createdAt: new Date(),
          isCompleted: false
        });
      this.todo.title = "";
      this.$toast.open({
        message: "Todo added successfully.",
        type: "success",
        position: "top-right",
        dismissible: true
      });
    },
    async getTodos() {
      var todosRef = await firebase
        .firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .collection("todos");

      todosRef.onSnapshot(snap => {
        this.todos = [];
        snap.forEach(doc => {
          var todo = doc.data();
          todo.id = doc.id;
          this.todos.push(todo);
        });
      });
    },
    updateTodoItem(docId, e) {
      var isChecked = e.target.checked;
      firebase
        .firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .collection("todos")
        .doc(docId)
        .update({
          isCompleted: isChecked
        });
      if (e.target.checked) {
        this.$toast.open({
          message: "Todo activated successfully.",
          type: "warning",
          position: "top-right",
          dismissible: true
        });
      } else {
        this.$toast.open({
          message: "Todo desactivated successfully.",
          type: "warning",
          position: "top-right",
          dismissible: true
        });
      }
    },
    deleteToDo(docId) {
      firebase
        .firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .collection("todos")
        .doc(docId)
        .delete();
    }
  }
};
</script>

<style>
.collection.with-header {
  max-width: 500px;
  margin: 0 auto;
}
.deleteIcon {
  margin-right: 10px;
  cursor: pointer;
}
.deleteIcon:hover {
  opacity: 0.5;
}
</style>
