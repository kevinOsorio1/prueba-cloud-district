import userReducer from "../../redux/reducers/userReducer";
import Repository from "../../reposiitory/Repository";

test("should return the initial state", () => {
  expect(userReducer(undefined, { type: "", user: null })).toEqual({});
});

test("should handle a user being added to an empty list", () => {
  const previousState = {};
  expect(
    userReducer(previousState, {
      type: "ADD_USER",
      user: { id: 1, name: "name2", job: "job2" },
    })
  ).toEqual({
    "1": {
      name: "name2",
      id: 1,
      job: "job2",
    },
  });
});

test("should handle a user being added to an existing list", () => {
  const previousState = {
    "0": {
      name: "name1",
      id: 0,
      job: "job1",
    },
  };

  expect(
    userReducer(previousState, {
      type: "ADD_USER",
      user: {
        name: "name2",
        id: 1,
        job: "job2",
      },
    })
  ).toEqual({
    "0": {
      name: "name1",
      id: 0,
      job: "job1",
    },
    "1": {
      name: "name2",
      id: 1,
      job: "job2",
    },
  });
});
test("should handle a user being updated", () => {
  const previousState = {
    "0": {
      name: "name1",
      id: 0,
      job: "job1",
    },
  };
  const action1 = {
    type: "UPDATE_USER",
    user: {
      name: "name2",
      id: 0,
      job: "job2",
    },
    id: 0,
  };

  const action2 = {
    type: "UPDATE_USER",
    user: null,
  };
  expect(userReducer(previousState, action1)).toEqual({
    "0": {
      name: "name2",
      id: 0,
      job: "job2",
    },
  });

  expect(userReducer(previousState, action2)).toEqual(previousState);
});
test("should handle a user being deleted", () => {
  const previousState = {
    "0": {
      name: "name1",
      id: 0,
      job: "job1",
    },
  };
  const action1= {
  type: "REMOVE_USER",
  user: null,
  id: 0,
}
  const action2= {
  type: "REMOVE_USER",
  user: null
}
  expect(
    userReducer(previousState, action1)
  ).toEqual({});
  expect(
    userReducer(previousState, action2)
  ).toEqual(previousState);
});
test("should handle no user being created", () => {
  const previousState = {
    "0": {
      name: "name1",
      id: 0,
      job: "job1",
    },
  };

  expect(
    userReducer(previousState, {
      type: "ADD_USER",
      user: null,
    })
  ).toEqual(previousState);
});
test("should handle many users being added", () => {
  const previousState = {
    "0": {
      name: "name1",
      id: 0,
      job: "job1",
    },
  };
  const action1 ={
    type: "ADD_USERS",
    user: null,
    users: [
      {
        name: "name2",
        id: 1,
        job: "job2",
      },
      {
        name: "name3",
        id: 2,
        job: "job3",
      },
    ],
    id: 0,
  }
  const action2 ={
    type: "ADD_USERS",
    user: null,
    users: undefined,
  }
  const received = {
    "0": {
      name: "name1",
      id: 0,
      job: "job1",
    },
    "1": {
      name: "name2",
      id: 1,
      job: "job2",
    },
    "2": {
      name: "name3",
      id: 2,
      job: "job3",
    },
  };
  expect(
    userReducer(previousState, action1)
  ).toEqual(received);
  expect(
    userReducer(previousState, action2)
  ).toEqual(previousState);
  expect(Repository.localStorage.getUsers()).toEqual(received);
});
