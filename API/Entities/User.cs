﻿namespace API.Entities;

public class User
{
    public int ID { get; set; }
    public string UserName { get; set; }    
    public string Email { get; set; }
    public byte[] PasswordHash { get; set; }
    public byte[] PasswordSalt { get; set; }
}