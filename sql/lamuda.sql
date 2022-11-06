use lamuda;

CREATE TABLE t_muda (
    id INT COMMENT 'ID' AUTO_INCREMENT NOT NULL PRIMARY KEY,
    muda_text TEXT COMMENT '無駄' DEFAULT NULL,
    waste_time INT COMMENT '無駄時間' DEFAULT NULL,
    create_user VARCHAR(256) COMMENT '登録者' DEFAULT NULL,
    update_user VARCHAR(256) COMMENT '更新者' DEFAULT NULL,
    created_at DATETIME COMMENT '登録日時' DEFAULT NULL,
    updated_at DATETIME COMMENT '更新日時'DEFAULT NULL
);

alter table t_muda comment '無駄';