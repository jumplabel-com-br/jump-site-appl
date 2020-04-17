﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using SiteJump.Models;

namespace SiteJump.Migrations
{
    [DbContext(typeof(WebMVCJump))]
    [Migration("20200415193448_Emails")]
    partial class Emails
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.14-servicing-32113")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("SiteJump.Models.Email", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Assunto");

                    b.Property<DateTime>("DataEnvio");

                    b.Property<string>("Destino");

                    b.Property<string>("Empresa");

                    b.Property<string>("Mensagem");

                    b.Property<string>("Nome");

                    b.Property<string>("Remetente");

                    b.Property<string>("Telefone");

                    b.Property<string>("TipoCurso");

                    b.HasKey("Id");

                    b.ToTable("Email");
                });
#pragma warning restore 612, 618
        }
    }
}
