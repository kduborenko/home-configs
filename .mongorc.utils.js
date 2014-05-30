function dropAllDatabases() {
    db._adminCommand({"listDatabases":1}).databases.forEach(function (d) {
        print("[" + colorize("✓", "green", true) + "] Drop database: " + colorize(d.name, "blue"));
        db.getSisterDB(d.name).dropDatabase();
    });
}
