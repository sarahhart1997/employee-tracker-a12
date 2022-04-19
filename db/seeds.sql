INSERT INTO department (department_name)
VALUES
('camera'),
('art_department'),
('production'),
('grip_electric'),
('hair_makeup'),
('wardrobe'),
('sound');

INSERT INTO positions (title, salary, department_id)
VALUES 
('director', 3500, 3),
('1st_assistant_director', 3000, 3),
('2nd_assistant_director', 2800, 3),
('script_supervisor', 2800, 3),
('set_production_assistant', 2000, 3),
('director_of_photography', 3200, 1),
('camera_operator', 2800, 1),
('1st_asst_camera', 3000, 1),
('dit', 2000, 1),
('key_grip', 3000, 4),
('best_boy_grip', 2800, 4),
('ge_production_assistant', 2000, 4),
('key_makeup_artist', 2800, 5),
('key_hairstylist', 2800, 5),
('key_costumer', 2800, 5),
('production_designer', 3000, 2),
('set_designer', 2800, 2),
('sound_mixer', 2800, 6),
('boom_operator', 2000, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
('tori', 'layne', 1, NULL),
('natalie', 'pace', 2, 1),
('sarah', 'hart', 3, 2),
('emily', 'anderson', 4, 2),
('noah', 'baldwin', 5, 2),
('adam', 'payne', 6, NULL),
('alicia', 'fernandez', 7, 6),
('ralph', 'torres', 8, 6),
('tom', 'hanks', 9, 6),
('david', 'gonzalez', 10, NULL),
('arjun', 'sharma', 11, 10),
('matt', 'tompson', 12, 10),
('lauren', 'rodgers', 13, NULL),
('amy', 'smith', 14, NULL),
('dennis', 'williams', 15, NULL),
('frank', 'williams', 16, NULL),
('randy', 'tompson', 17, NULL),
('alice', 'daniels', 18, NULL),
('grace', 'hanks', 19, 18);
